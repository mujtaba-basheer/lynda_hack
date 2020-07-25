import requests
import requests.sessions
import requests.cookies
from bs4 import BeautifulSoup
from config import form_data
import time


class Lynda:
    def __init__(self, course=""):
        self.url = "https://www.lynda.com/portal/sip?org=detroitpubliclibrary.org"
        self.headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.5',
            'Connection':
            'keep-alive',
            'Host': 'www.lynda.com',
            'Referer':
            'https://www.lynda.com/signin/organization',
            'Upgrade-Insecure-Requests':
            '1',
            'User-Agent':
            'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0'
        }
        self.s = requests.Session()
        self.form_data = form_data
        self.html = ""
        self.links = list()
        self.titles = list()
        self.sections = list()
        self.course = course

    def writeLink(self, link):
        f = open('links.js', 'a')
        data = "'" + link + "',\n"
        f.write(data)
        f.close()

    def printTree(self):
        sections = self.sections

        for section in sections:
            print(f"\t{section['title']}")
            for video in section['videos']:
                print(video['title'])
            print("")

    def writeTree(self):
        print("Writing out the video ids...\n")
        with open("titles.js", "a") as fh:
            fh.write("const titles = ")
            data = str(self.titles) + ";\n\n"
            fh.write(data)
            fh.write("module.exports = titles;")

        print("Writing out the course-structure...\n")
        with open("structure.js", "a") as fh:
            fh.write("const structure = ")
            data = str(self.sections) + ";\n\n"
            fh.write(data)
            fh.write("module.exports = structure;")

    def getSeaSurf(self):
        soup = BeautifulSoup(self.html, "html5lib")
        seasurf = soup.find('input', attrs={'id': 'seasurf'})['value']
        return seasurf

    def verifyAcc(self):
        soup = BeautifulSoup(self.html, "html5lib")
        name = soup.find('span', attrs={'class': 'account-name'})
        print("\n" + name.getText() + "\n")

    def getCourseUrl(self):
        soup = BeautifulSoup(self.html, "html5lib")
        link = soup.find(
            'a', attrs={'title': self.course})['href']
        return link

    def getVideoLinks(self):
        soup = BeautifulSoup(self.html, "html5lib")
        link_objs = soup.findAll(
            'a', attrs={'class': 'item-name video-name ga'})
        links = [link['href'] for link in link_objs]

        print("Total links found:", len(links), "\n")
        self.links = links

    def selectVideo(self):
        soup = BeautifulSoup(self.html, "html5lib")
        link = soup.find(
            'video', attrs={'class': 'player'})['data-src']
        self.writeLink(link)

    def getStruct(self):
        sections = list()
        titles = list()
        soup = BeautifulSoup(self.html, "html5lib")
        container = soup.find(
            'ul', attrs={'class': 'course-toc toc-container autoscroll'})
        for section in container.contents:
            if section.name is not None:
                sec_title = section.find('h4').getText().strip()
                sec_videos = list()
                ul = section.find('ul', attrs={'class': 'row toc-items'})
                lis = section.findAll('li', attrs={'class': 'toc-video-item'})
                for li in lis:
                    vid_id = int(li['data-video-id'])
                    vid_title = li.find(
                        'a', attrs={'class': 'item-name video-name ga'}).getText().strip()
                    sec_videos.append({'title': vid_title, 'id': vid_id})
                    titles.append(vid_id)

                sections.append({'title': sec_title, 'videos': sec_videos})

        self.sections = sections
        self.titles = titles

    def makeReq(self):
        with self.s as s:
            # Login Page
            r = s.get(self.url, headers=self.headers)
            self.html = r.content
            seasurf = self.getSeaSurf()
            self.form_data['seasurf'] = seasurf

            # Logging In
            r = s.post(self.url, data=self.form_data,
                       headers=self.headers)
            self.html = r.content
            self.verifyAcc()

            # Selecting Course
            self.url = self.getCourseUrl()
            r = s.get(self.url, headers=self.headers)
            self.html = r.content

            # Extracting All Video Page Links
            self.getVideoLinks()
            self.getStruct()
            self.writeTree()

            # Writing Out the Video links
            print("Writing video links to 'links.js'\n")
            print("#" * len(self.links))

            with open("links.js", "a") as fh:
                fh.write("const links = [")
            i = 0
            for link in self.links:
                r = s.get(link, headers=self.headers)
                self.html = r.content
                self.selectVideo()
                i += 1
                print(f"written [{i}/{len(self.links)}]")
            with open("links.js", "a") as fh:
                fh.write("];\n\nmodule.exports = links;")

            # Logging Out
            r = s.get("https://www.lynda.com/signout", headers=self.headers)


if __name__ == "__main__":
    course = input("Enter full course name: ")
    if len(course) > 1:
        lynda = Lynda(course)
        lynda.makeReq()

        openLinks = input("Enter 'Y' to open 'links.js': ")
        if openLinks == "Y":
            # Displaying File Contents
            print("\nOpening 'links.js'...")
            time.sleep(3)
            f = open("links.js", "r")
            for line in f.readlines():
                print(line)
            f.close()

        openTitles = input("Enter 'Y' to open 'titles.js': ")
        if openTitles == "Y":
            # Displaying File Contents
            print("\nOpening 'titles.js'...")
            time.sleep(3)
            f = open("titles.js", "r")
            for line in f.readlines():
                print(line)
            f.close()

        displayTree = input("Enter 'Y' to display course structure: ")
        if displayTree == "Y":
            # Displaying Course Structure
            print("\nDisplaying Course Structure...\n")
            time.sleep(3)
            lynda.printTree()

        print("Run 'node vid.js' to download the files.")
    print("exiting...")
    time.sleep(2)
