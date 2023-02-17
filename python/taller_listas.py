print("//////////////////////01/////////////////////////\n")

# 1. Campus requiere administrar algunos datos de sus Campers
# como por ejemplo, la creación, eliminación o búsqueda de los
# developers, entre otros, por tal razón, ha solicitado el diseño de
# un programa que cuente con el siguiente menú como panel de
# control:
print("----------------------------MENU--------------------------\n")
print("1\tCREAR GRUPO DE ARTEMIS")
print("1.1\tLISTA CAMPERS DE ARTEMIS")
print("1.2\tAGREGAR CAMPERS A ARTEMIS")
print("1.3\tELIMINAR CAMPERS DE ARTEMIS")
print("1.4\tORDENAR ALFABETICAMENTE EN LISTAS DE ARTEMIS")
print("1.5\tBUSCAR CAMPER EN LISTA DE ARTEMIS")
print("2\tCREAR GRUPO DE SPUTNIK")
print("2.1\tLISTA CAMPERS DE SPUTNIK")
print("2.2\tAGREGAR CAMPERS A SPUTNIK")
print("2.3\tELIMINAR CAMPERS DE SPUTNIK")
print("2.4\tORDENAR ALFABETICAMENTE EN LISTAS DE SPUTNIK")
print("2.5\tBUSCAR CAMPER EN LISTA DE SPUTNIK")
resp=str(input("Digite opcion:\n\t"))

artemis=[
    "JUAN",
    "NICOLAS",
    "ANDRES",
    "MARIA",
    "SANTAMARIA",
    "JULIO"
]

sputnik=[
    "PAULA",
    "ANGEL",
    "MARIO",
    "MATEO",
    "HANAA",
    "JUAN"
]


if resp=="1":
     print("creado con el nombre de artemis")
elif resp=="1.1":
    print(artemis)
elif resp=="1.2":
    camper=input("quien??:")
    artemis.append(str(camper))
    print(artemis)
elif resp=="1.3":
    print(artemis)
    camper=str(input("quien??:"))
    artemis.remove(camper)
    print(artemis)
elif resp=="1.4":
    artemis.sort()
    print(artemis)
elif resp=="1.5":
    print("¡mayusculas!")
    nombre=str(input("a quien buscas??:\t"))
    
    for i in artemis:
         if nombre == i:
             val=artemis.index(i)
             print(f"la posicion {val}")
         else:
            print("no esta")

if resp=="2":
     print("creado con el nombre de sputnik")
elif resp=="2.1":
    print(sputnik)
elif resp=="1.2":
    camper=input("quien??:")
    sputnik.append(str(camper))
    print(sputnik)
elif resp=="2.3":
    print(sputnik)
    camper=str(input("quien??:"))
    sputnik.remove(camper)
    print(sputnik)
elif resp=="2.4":
    sputnik.sort()
    print(sputnik)
elif resp=="2.5":
    print("¡mayusculas!")
    nombre=str(input("a quien buscas??:\t"))
    
    for i in sputnik:
         if nombre == i:
             val=sputnik.index(i)
             print(f"la posicion {val}")
         else:
            print("no esta")

print("//////////////////////02/////////////////////////\n")

# atletas han pasado a finales en salto triple en los juegos
# olímpicos de 2022.

# Diseñe un programa que pida por teclado los nombres de cada
# atleta finalista y a su vez, sus marcas del salto en metros.

# Informar el nombre de la atleta campeona que se quede
# con la medalla de oro y si rompió récord, reportar el pago que
# será de 500 millones. El récord esta en 15,50 metros.

nom1=str(input("nombre de jugador:"))
num1=float(input("marca de salto:"))
nom2=str(input("nombre de jugador:"))
num2=float(input("marca de salto:"))
nom3=str(input("nombre de jugador:"))
num3=float(input("marca de salto:"))

if nom1>nom2:
    if nom1>nom3:
        gan="3"
        print(f"el ganador fue {nom3}\n")
    else:
        gan="1"
        print(f"el ganador fue {nom1}\n")
elif nom2>nom3:
    gan="2"
    print(f"el ganador fue {nom2}\n")


if gan=="1":
    if num1>15.50:
        print("gana 500 millones")
elif gan=="2":
    if num1>15.50:
        print("gana 500 millones")
elif gan=="3":
    if num1>15.50:
        print("gana 500 millones")

print("//////////////////////03/////////////////////////\n")

# En pocos días comienza la vuelta a España y la federación
# colombiana de ciclismo, como incentivo ha determinado pagar
# un valor adicional. El programa pedirá por teclado el sueldo
# básico por kilometro recorrido, el número de kilómetros
# recorridos durante toda la vuelta, numero de kilómetros
# recorridos con la camiseta de líder.
# Calcular el valor a pagar total, si se sabe que si recorre en la
# bici más de 1800 kilómetros con la camiseta de líder, esos
# kilómetros se consideran especiales y tendrán un recargo de
# 25%.
# El total de kilómetros por recorrer durante toda la vuelta serán
# 3.277 kilómetros,el ganador de la vuelta a España recibirá 700
# millones de pesos.

suebas=int(input("sueldo Basico por kilometro")) 
numkil=int(input("numero de kilometros")) 
camlid=int(input("numero de kilometros con camisa de lider"))
gan=str(input("ganaste??  si/no:")) 
if camlid >1800:
    total=camlid+(25*camlid/100)
else:
    total=camlid
    
ttotal=total*suebas    
    
if gan=="si":
    tfin=ttotal+700000000

print(int(tfin))

print("//////////////////////04/////////////////////////\n")

# Una empresa tiene 500 almacenes. Cada almacén debe
# reportar el nombre y 5 registros c/u, contiene el tipo de articulo
# y el número de unidades vendidas de ese artículo.

# Haga un programa en Python para determinar cuál fue el
# almacén que mas vendió, cual fue el articulo más vendido de
# ese almacén y cual el más vendido en general.

babaria={
    "aguila":150,
    "poker":350,
    "cocacola":370,
    "colaypola":450,
    "aguardiente":600
    
}



arturito={
    "camisa":180,
    "aguila":100,
    "pantalon":800,
    "zapatos":460,
    "pasta":80
    
}

primev=((babaria["aguila"])+(babaria["poker"])+(babaria["cocacola"])+(babaria["colaypola"])+(babaria["aguardiente"]))
seconv=((arturito["camisa"])+(arturito["aguila"])+(arturito["pantalon"])+(arturito["zapatos"])+(arturito["pasta"]))
 
if primev > seconv:
     print("babaria vendio mas\n")
else:
    print("arturito vendio mas\n")


total = max(babaria, key=babaria.get)
print(f"{total}\n")

babmax=max(babaria,key=babaria.get)
artumax=max(arturito,key=arturito.get)

if babmax > artumax:
    print(f"el producto mas vendido fue {babmax}")
else: 
    print(f"el producto mas vendido fue {babmax}")

    

