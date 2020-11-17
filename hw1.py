import matplotlib.pyplot as plt
import pandas as pd
from prettytable import PrettyTable

cost = pd.read_csv('data.csv')

plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False

# #条形图
# plt.bar(  x = cost.type,
#           height = cost.cost, # 指定绘图数据
#           color = 'steelblue',# 指定直方图的填充色
#           edgecolor = 'black', # 指定直方图的边框色
#           )
# # 添加x轴和y轴标签
# plt.xlabel('类型')
# plt.ylabel('支出（万元）')
# # 添加标题
# plt.title('支出类型')
# # 显示图形
# plt.show()
#
# #表格
# x = PrettyTable(['食品','衣着','设备','医疗','交通','教育','居住','杂项'])
# x.add_row(['4934.05', '1512.88','981.13','1294.07','2328.51','2383.96','1246.19','649.66'])
# print(x)


x_data = ['食品','衣着','设备','医疗','交通','教育','居住','杂项']
y_data = [4934.05, 1512.88,981.13,1294.07,2328.51,2383.96,1246.19,649.66]

#散点图
plt.scatter(x_data, y_data)
plt.show()

#折线图
plt.plot(x_data, y_data)
plt.show()

