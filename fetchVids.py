from download import download
import pathlib
import sys
import requests
import requests.sessions


class Downloader:
    def __init__(self):
        self.base_path = str(pathlib.Path(__file__).parent.absolute())
        self.titles = list()
        self.links = list()
        self.num = 0
        self.host = "https://www.lynda.com/"
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

        print("Extracting Video Titles...")
        with open("titles.txt", "r") as fh:
            for line in fh.readlines():
                self.titles.append(line)

        print("Extracting Video Links...")
        with open("links.txt", "r") as fh:
            for line in fh.readlines():
                self.links.append(line)

        if len(self.links) == len(self.titles):
            self.num = len(self.links)
        else:
            print("Oops! There was an error :-/")
            sys.exit()

    def start(self):
        with requests.Session() as s:
            for i in range(self.num):
                file_path = self.base_path + self.titles[i] + ".mp4"
                r = s.get(self.links[i], headers=self.headers)
                with open(self.titles[i].strip(), "wb") as fh:
                    fh.write(r.content)

        print("\nAll Videos downloaded successfully :-)")


if __name__ == "__main__":
    downloader = Downloader()
    downloader.start()
