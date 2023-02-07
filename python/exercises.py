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