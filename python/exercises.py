print("/////////////////////////////01//////////////////////////////////")
 
 #  1. Qué operadores utiliza Python en los siguientes casos:

# A. División Modular
# B. Exponenciación
# C. División que retorne entero.

n1=10
n2=2

print(f"B. Exponenciación: {n1}**{n2}={n1**n2}")
print(f"A. División Modular: {n1}%{n2}={n1%n2}")
print(f"C. División que retorne entero: {n1}//{n2}={n1//n2}")

print("/////////////////////////////02//////////////////////////////////")

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

print("/////////////////////////////03//////////////////////////////////")

# 3. Si hay operadores de igual precedencia, en qué orden se
# ejecutan?

# A. De izquierda a derecha
# B. De derecha a izquierda

print("A. De izquierda a derecha")

print("/////////////////////////////04//////////////////////////////////")

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
    
print("/////////////////////////////05//////////////////////////////////")  

# 5. Enumere 5 tipos de datos en Python y suministre un valor de
# ejemplo de cada uno.
print(" ")
print("int => numero entero => 10")
print("long => numero entero largo => 10216546684324651564")
print("float => numero decimal => 10.123854")
print("bool => booleano => true")
print("str => cadena de caracteres => 'cadena' ")


print("/////////////////////////////06//////////////////////////////////")


# 6. En sus propias palabras, qué son las funciones
# preconstruidas y proporcione 2 ejemplos.
print(" ")
print("son operaciones hechas con antelacion para poder realizar micro tareas dentro del programa")
print(" ")
print("ejemplo 1")
print("range(6)")
ran=range(6)
print(list(ran))
print(" ")
print("ejemplo 2")
print("print(hola)")
print("hola")
print(" ")

print("/////////////////////////////07//////////////////////////////////")


#7. Cuál es la diferencia entre un condicional simple y un
# condicional compuesto?
print(" ")
print("las condiciones simples sol las que realisan de cisiones de una sola respuesta si o no encambio las compuestas son las que contienen no solo en un tipo de respuesta el programa sino en ambas respuestas1")
print(" ")
print("-------------------condicionales simples-------------------")
print("si el valor pasa de 300 entonses sume 40")
n1=int(input("primer digito:\t"))
n2=int(input("segundo digito:\t"))
n3=n1+n2
if n3 > 300:
    print(f"{n3+40}")
print("-------------------condicionales compuestas-------------------")
print("si el valor pasa de 300 entonses sume 40 si no reste 40")
n1=int(input("primer digito:\t"))
n2=int(input("segundo digito:\t"))
n3=n1+n2
if n3 > 300:
    print(f"{n3+40}")
else:
    print(f"{n3-40}")

print("/////////////////////////////08//////////////////////////////////")

# 8.Escriba un bloque cualquiera de código en Python en donde
# utilice 2 condicionales (if) anidados.
print(" ")
print("escribe Raul")
nombre=input("aca bro --->")

if nombre=="Raul":
    print("EXACTO!!")
elif nombre=="raul":
    print("no bro la r en mayuscula ")
else:
    print("haceme caso!!")
    

print("/////////////////////////////09//////////////////////////////////")

# 9.Construya un algoritmo en Python, que permita ingresar la
# información de un empleado e imprima el nombre, los
# apellidos y la antigüedad. Los datos que se deben solicitar
# son los siguientes:
# *Nombre * Teléfono *Año de ingreso a la empresa
# *Apellidos *Edad.
    
print(" ")
nom1=input("cual es tu primer nombre:\t")
nom2=input("cual es tu primer nombre:\t")
ape1=input("cual es tu primer apellido:\t")
ape2=input("cual es tu primer apellido:\t")
cel=input("cual es tu telefono:\t")
a_ing=int(input("cuando entraste a esta empresa:\t"))
edad=input("cual es tu edad:\t")

a_act=2023
print("NOMBRE: "+nom1+" "+nom2+" "+ape1+" "+ape2)
print(f"TIEMPO EN ESTA EMPRESA:\t{a_act-a_ing} años")
print("")


print("/////////////////////////////10//////////////////////////////////")

# 10. En su casa le solicitan que realice un algoritmo en Python,
# que permita calcular el valor a pagar por concepto de
# energía eléctrica. Los datos que se conocen son los
# siguientes:
# - Mes de consumo - Valor kw
# -Total kw consumido en el mes - estrato

print("")
print("YO CALCULAR TU RECIBO!! UGA UGA")
mes=input("QUE MES SER HOY??:\t")
kw=int(input("CUANTO VALER KILOWATT??:\t"))
tim=int(input("CUANTO GASTAR EN VIENDO CAJA BRILLANTE??:\t"))
estra=int(input("QUE ESTRATO SER TU??:\t"))

print(f"TU GASTAR EN {mes}:\t${tim*kw*estra}")