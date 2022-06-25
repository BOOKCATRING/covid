# -*- codeing = utf-8 -*-
# @Author :xulei
# @Time :2022/6/24 2:01
# @File :utils.py
# @software: PyCharm

import time
import pandas as pd
import numpy as np

def get_time():
    time_str = time.strftime("%Y{}%m{}%d{} %X")
    return time_str.format("年","月","日")

def get_map_data():
    print("获取地图数据")
    # 读入文件
    filename = "E:\Learn\机器学习\新冠肺炎数据集\owid-covid-data.csv"
    data = pd.read_csv(filename)

    data_part = data.loc[:, ["date", "location", "total_cases"]]
    data_country = data_part[data_part['date'] == '2022-06-24']
    res = []
    for row in data_country.itertuples(index=True, name='Pandas'):
        res.append({"name": getattr(row, "location"), "value": int(getattr(row, "total_cases"))})
        # print(getattr(row, "location"), getattr(row, "total_cases"))

    print(res)
    return res

if __name__ == "__main__":
    print(get_time())