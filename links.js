const links = [
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_00_01_WL30_welcome_532183.mp4?xRPetDOgbIojh3yaVCJDMp6YCvmhb_9iGqy5ya9BKhGDK8IXlXgmH4rFGCff37MDilEYrqWOWCfALWLi6abPjyt7rPmwNUrvYOReFePrz21qQ48iRDm9xdMyePQLLR2S_t9H655TK3uJr82_rZQ2chXT6uYtm-YgFx6_e6ZZfB5nc7-mMHbRvkTEha1opz-0zLxj&c3.ri=3779348763317071009",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_00_02_LA30_what_532183.mp4?HKOf_oaPiY7NvDXZiFU2VsOP7snrrYcVFcsTyui_PfW3b_kResvjTZhbYTzTZAfk9-PAZWPw3J2fNBaNtx6Pu5SYcyCT2AuaefT_R0e0z5RAQSob4oxw_HbjHhj1lkNoBOjTG7nbYwHNhAWFYH0ScLNHMPbBBmc0BaGK41DJ7d8pVglwQd_KDDeFDcEk-xcU&c3.ri=3776252453549177480",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_01_01_XR30_Cloud_Storage_Overview_532183.mp4?x4Nxly8PpQSARX48-jxMhbqpKsl9j-AYF32JM-ALQ8g2mWMG88gAy7rhNF49wBsAIu0BrQ8Gf0-bsRTzLFE64hJUAYFhjyoujlCoWt_j9UsJflADLi2gKAHqLwIotnYbnIGUiFxotue1YLwJoYzWmTywsSqPQc33fe5grtNttw8EV3Yf1jPHFHhxf-IkFNKBnzHWP8rsUJAoUMkxkOGbvq1M&c3.ri=3775689503595756130",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_01_02_XR30_Block.mp4?E0EGHNwoUb1CJKnGiWK7aZw-Ol7pEnVAVcB8i0WPL-58JG4eWZIwPP1ljHRY5kP7gRIOmFmfeBCujdlc4-zMp9U_pQb2K6XO2iNb-ClXJDS6fcKlTezU8_Uy5siqnWQtv-BawiJXjPWjLyDvu_XLDff9JC0HX7bS4JLG2KgKAFfPJb-xy_nO8lw0&c3.ri=3778785812593999875",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_01_03_XR30_Object.mp4?0slo0GrDYJLZbymrTYJzFRNQWqyjDJFmnpIfl6GaE2lSYPZDCyl0ihFxdSlEL0q82yH-_C7pnErjuueic3V3Ku7f5K2zrGwvaFQ_dijO2ABSBjiGsfuYrHBiiENrKeUYR9bc9CIQ-MTCnsGdA2MAXIPhCp6EZgIu6qmqsn90qwvOq1Hy8gsDFSJo1w&c3.ri=3779911713132081021",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_01_04_XR30_File.mp4?J0CnbQ9e6B9uU-qCaD5hFveHF7opGGSDeT4j9kAkHGbV2eI974LCtyEmil1Mi0e0Iu6M9BzI1xPN_mdbehUCrHTJ5_RUqFFwbHqdARKK4jxHeKkVdkZ1URdUnRQ_r3TOeFMt7gt8Ijt4FmIidJeT4zq7D6z7uHefQ1w7LhxuOQL6ag0MkWT0RD8&c3.ri=3777941387491902296",
    "https://lynda_files2-a.akamaihd.net/secure/courses/737775/VBR_MP4h264_main_SD/737775_01_05_XR30_Example_1.mp4?c3.ri=3778222862600732769&hashval=1595632943_ffd0f42e8ee50c8f573e1bd570022a47",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_01_06_XR30_Example_2.mp4?BysotrabVQcmnc-NhGCBv7FGJl5-x70Chmm4V4HDTYUwA8jlYDPYzA1EqkPc5lW1ZFYkmRNRyyQasKJu3mx068YUoWMOso_zOZ3dTpe-EdAZoOcmKsT0Tmvswf-LUKLSzKBmOJV_eIHW0-bf4M3-Pk4IN0ZgVKFJL8zwNPBRFkui6Iepuz5hg7H5CRM5XA&c3.ri=3779911713132081072",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_01_07_XR30_Planning_your_Storage_532183.mp4?AkZvbRCg4AVQGINlojO-ugtLpKQdvSIyiV_UZ6itYBMiFLspwD5AGSEAMKSb0Yz0KVX-Ve6sv7F__rFYyzAu_GtzpDy-zcJL19JuEWX4vJQEteEJGU9wh7FSdUABmvzkuRRblepvfyj9FfMQg7PSEzJjV2iLRQwgGKk52q9vRDwEvRWvmnQPBuR34V_xz-rxTjF6xmOrayYjj0KyztPDJ0k&c3.ri=3780193188180094641",
    "https://lynda_files2-a.akamaihd.net/secure/courses/737775/VBR_MP4h264_main_SD/737775_01_08_XR30_Creating_a_Business_Case_for_Cloud_Storage_532183.mp4?c3.ri=3780193188180094660&hashval=1595632948_3491162c205ef74e86010a319baafe5d",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_02_01_XR30_Allocate_Storage_Instances_532183.mp4?OMmrDiq1JYQG9Z01gMv2hnlWNJjHwOceSOcYg7PyC_ss_0mnE1utlLSVPhUSnTaVXQ6SeY5mCEA5Z-rtrl0Ap_ShnOupm7Tg5LFDCnTC6yQoQmHvfSur7dlG_l_tyM1EdFqT6IIfo4jttHzKBoXV1VAybe8rUsVNmdDDNqNP-5MeS-rOwVoHCqLCSatdYAc6mNyXtyRa8FH-MShenTANfSfrDGbW&c3.ri=3779348763317071187",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_02_02_XR30_Putting_Data_into_Cloud_Storage_532183.mp4?oi0c_bcagszbKNrS0ljl96qWYH0-VTKHfBWMZsZzeTM1COdxebsh259aQgYd4uzfcnMVPErCWlF09GiAkTXteajNXXPyKGCohVeZYkuOzEZKOfaBDRu2Wc7gUB_NAj52JCrY9gsFy2K4_gEieMEsYlSLva-U-3-WMMGVQkKfDvXsqr4dOU8QEM-1qTRSfvmoNpuDaoApfk6aLNQfJN7alZCNxi0ucov--Ls&c3.ri=3779348763317071205",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_02_03_XR30_Securing_Cloud_Storage_Instances_532183.mp4?GTqGEwF7WjLOpTasa9gfO9G2XkPHxhelYI-BmCO4-C5Lc0UjKLEdfBB_Bep2Qb7Qng6QM5WVy3_iSdf5xFiEDkk48pf9NokDri-PkqqbCth5LpCufjzpiA_nVCauLHQPCJdS7UGe602tS3-H1Idt1iLDSROHEWXrrIjm50LpuDhIeN-Yib69mgNw16BeRY7rZOJtChf3lLEGH2MshC7u0o11wMvLHP4BIUifjg&c3.ri=3775689503595756293",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_02_04_XR30_Removing.mp4?tVnsEzRFOx4DK9oMpfRmobQ2328W7cb5JKxiltMJtKFn0yB8H6D7HujDOftymBzbOA_gdKyTVuKI1DtTYd2ACqvVDQ-l_V5HHQ7z08NQDtCeeRl5RD3ARIOMBjdVreCv69eLMeaU3N3bt5gKXZYCHenuqL-nxxGSTjIIXu-5WEg4gUV_nfe68E88qn_k&c3.ri=3779067288235503522",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_02_05_XR30_Usage.mp4?UXoKQg2tlaFZjNEIBy5ksBXeDkW_I0vCDMwxEiW99kjTfavK9JRq5iaBXYoh7zeebr7n8wI-sNREZ1zgjw3VFRoJSFGQKaIdriNouEhwK7x7PyZxTJtpRaG0owS3zurNDf5hzfBckAdhnkEb7c6_JtMgksqFLjTEOKFcWr__N-gadPnllcTBcOKo&c3.ri=3775970978631186983",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_02_06_XR30_Understanding_How_to_Define_the_Value.mp4?6lxljAFrcvIk-ee7RtnwwrQ3o_SbDDgDDVgtLkgVSDnFxWFqvq4KSD5Z8uZoIBu86qgdwFQ-XB-fcnxAOwPXS4jABL52PhGhydhXk7vtm7v7Vvrpz0H0oghlA3SDoHwbu2w-RSURSAM2A9KupUDk-4FY8Hq7fooUtE2_Uo6PPV8jAU2RNl4_gXmJ0-BzEFvQTso61r2n8PLpC1rh2GYQkO_YPENwbbW1NL8&c3.ri=3779630238027445215",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_03_01_XR30_Understanding_Your_Cloud_Storage_Requirements_532183.mp4?vxFcdl9ti6QvJPfCBF17hIN3BQsTT_vVJmk4p4W5DzAhj3K3cCJMXDX3Un5JvlfRhJz41WeomxVx7-yuhLdVA0A6MRYv-rBNqcWNy_mGT51DR59VJyw1BL5GchUSEhsU-zwprrDsYyiyXPn_Dy23WQHrKLSS-IsNGhQW_soHo0HYdi3lkT1l_FLb7X1Jj-fxL7k9ytkH1nENbzLKIHdk_XTTFmM0IKSrAXVuPvSZjdmrDA55ElRUM5k&c3.ri=3777941387491902494",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_03_02_XR30_Defining_Cloud_Storage_Cost_532183.mp4?LagYGCGDWF1VAtMa1mzZ4WaenuZk7yPt037U7VOVKepKD_qzk8_7a1AvZBS-sR2hlpGHC5l1BLSM_KYnUBYRkvJ_bgF9Cp7hCKdSuNa_-jo2Fi66hk2A1HA7dH2C7bzbsIeVLG3mO6sjTBVsxfGZagFsEQ4yPQnAlDPhXQ3NzqnsLGt0do6_fKdOUqIpldhjd5Qr-QYHc0rlP8qW7SC3uajJ0IXjUcw&c3.ri=3779067288235503603",
    "https://lynda_files2-a.akamaihd.net/secure/courses/737775/VBR_MP4h264_main_SD/737775_03_03_XR30_Projecting_Storage_Growth.mp4?c3.ri=3776534011907904701&hashval=1595632963_063e3bcdd88f48d6ef10175a981b2df5",
    "https://lynda_files2-a.akamaihd.net/secure/courses/737775/VBR_MP4h264_main_SD/737775_03_04_XR30_Defining_Implimentation_532183.mp4?c3.ri=3778504337510335313&hashval=1595632965_f82559e3bfdb40d50840347907525b84",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_04_01_XR30_File.mp4?m8Lqb8MdwRbdqWkf0b-fggLv-l08D7gJMU7tjrfVmUPPPOM7qj5FQWqCQt_BiurSFPMBWWIHad3ByW-NhYnSA6nSZwB2Tbm5pn-xnnP4hbsCjyXvQA7EeOyWJksDLwYt9q7aqp6SFOb1LRqxhpT621l5wX7cGUSH0Gx4yNkmE42Ps42BTSarZa8&c3.ri=3779911713132081316",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_04_02_XR30_Data.mp4?tNd0oV0a2tlBq9RyH0VAYgFPIv3LkdaUxynddZDzSDM3iB3CHjpE6SxFoneX7SwZ67gNqQ3lsvX1OE1E8nlWhJZCpwLnBTRMWBi95Dc4ogfYA12gCyJA3SCVwJzNTCBcdZzuWv7VpTiy2eK1vILBOAezmF9tnZymCu6mth2KkwMY9SmAqQJEDQ&c3.ri=3777378353648957059",
    "https://files3.lynda.com/secure/courses/737775/VBR_MP4h264_main_SD/737775_04_03_XR30_Logging.mp4?TQkgKxIsRgZU9heYFlkfghjZ-oaYSHpj8ZvNaa8m0E8hLpJYE403N2qDuXRU5d9f4AGvwB1kPWgYphAXIr9Z_VGYSreLxeW1LtlyxrsyPHAUT7d1emMEXSPM89MWvPJlkh0LEdefaGK8F44rU3QkaxRQaA3XOfMmTeJb2jvcQZBaPcYfQjJSMtsXHTY&c3.ri=3776252453549177831",
    "https://lynda_files2-a.akamaihd.net/secure/courses/737775/VBR_MP4h264_main_SD/737775_05_01_LA30_nextsteps_532183.mp4?c3.ri=3779630238027445364&hashval=1595632971_15fded4b4dda615112a30feeedc46f49",
];

module.exports = links;