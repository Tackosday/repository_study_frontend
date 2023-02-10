print("//////////////////////01/////////////////////////\n")

# 1. Campus requiere administrar algunos datos de sus Campers
# como por ejemplo, la creación, eliminación o búsqueda de los
# developers, entre otros, por tal razón, ha solicitado el diseño de
# un programa que cuente con el siguiente menú como panel de
# control:
print("----------------------------MENU--------------------------\n")
print("1\tCREAR GRUPO DE ARTEMIS\n")
print("1.1\tLISTA CAMPERS DE ARTEMIS\n")
print("1.2\tAGREGAR CAMPERS A ARTEMIS\n")
print("1.3\tELIMINAR CAMPERS DE ARTEMIS\n")
print("1.4\tORDENAR ALFABETICAMENTE EN LISTAS DE ARTEMIS\n")
print("1.5\tBUSCAR CAMPER EN LISTA DE ARTEMIS\n")
print("2\tCREAR GRUPO DE SPUTNIK\n")
print("2.1\tLISTA CAMPERS DE SPUTNIK\n")
print("2.2\tAGREGAR CAMPERS A SPUTNIK\n")
print("2.3\tELIMINAR CAMPERS DE SPUTNIK\n")
print("2.4\tORDENAR ALFABETICAMENTE EN LISTAS DE SPUTNIK\n")
print("2.5\tBUSCAR CAMPER EN LISTA DE SPUTNIK\n")
resp=str(input("Digite opcion:\n\t"))


Artemis=[]

Sputnik=[]

def listaimpresa():
    print(Artemis)

def mascampers():
    print("ingrese el nombre del camper en mayuscula")
    str(camper=input("quien es el camper:"))
    