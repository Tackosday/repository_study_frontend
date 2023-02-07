# 4. Que son las expresiones regulares en Python?
print(" ")
print("son esxpreciones que permiten ir creando patrones para generer un micro programa que permita dividir segun las instruciones")
import re
print(" ")
cadena="i dont like tomato"
print(f"texto => {cadena}")
print(" ")
buscando="tea"
print(f"buscar={buscando}")
print(" ")
if re.search(buscando,cadena) is not None:
    print("encontrado")

else:
    print("no encontrado")