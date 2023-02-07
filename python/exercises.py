# 2. En la jerarquía de operadores, cuáles son los que más
# prioridad tienen cuando el intérprete de Python los evalúa?
n1=1
n2=2
n3=3
n4=4
print("-------MAYOR----------")
print("v---------------------")
print("|\tparentesis")
print(f"|\t{n1}+{n2}+({n3}+{n4}) = {n1+n2+(n3+n4)}")
print("|---------------------")
print("|\tpotenciacion")
print(f"|\t{n1}+{n2}**{n3} = {n1+n2**n3}")
print("|---------------------")
print("|\tdiviciones y multiplicacion")
print(f"|\t{n1}*{n2}//{n3} = {n1*n2//n3}")
print("|---------------------")
print("|\tsuma y resta")
print(f"|\t{n1}+{n2}-{n3} = {n1+n2-n3}")
print("|---------------------")
print("|\trelacionales")
print(f"|\t{n1}>{n2} = {n1>n2}")
print("|---------------------")
print("|\tAND")
print(f"|\t{n1} and {n2}=={n2} ={n1 and n2 ==n2}")
print("|---------------------")
print("|\tOR")
print(f"|\t{n1} or {n2}== {n2} ={n1 and n2 == n2}")
print("|---------------------")
print("v")
print("-------MENOR----------")

