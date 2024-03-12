import matplotlib.pyplot as plt
import numpy as np

def bezier_curve(points, t):
    if len(points) == 1:
        return points[0]
    
    new_points = []
    for i in range(len(points)-1):
        mid_point = (1 - t) * points[i] + t * points[i + 1]
        new_points.append(mid_point)
    
    return bezier_curve(new_points, t)
    
# x0, y0 = map(int, input("Masukkan pasangan titik pertama: ").split())
# x1, y1 = map(int, input("Masukkan pasangan titik kedua: ").split())
# x2, y2 = map(int, input("Masukkan pasangan titik ketiga: ").split())
# res = int(input("Masukkan jumlah iterasi: "))

x0 = 1
y0 = 1
x1 = 4
y1 = 10
x2 = 7
y2 = 1
res = 5

points = np.array([[x0, y0], [x1, y1], [x2, y2]])
curve_points = []
for i in range (res):
    t = np.linspace(0, 1, i * 2 + 1)
    curve_points.append(np.array([bezier_curve(points, ti) for ti in t]))