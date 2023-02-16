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


artemis=[
    "JUAN DAVID ESCALANTE CASTAÑEDA\n",
    "NICOLAS DAVID CABRERA MAMON\n",
    "ANDRES FELIPE ZANABRIA CABRERA\n",
    "MARIA CAMILA AMAYA RUBIO\n",
    "SANTAMARIA RODRIGEZ GONZALEZ\n",
    "JULIO ALBERTO ZULUAGA MARIN\n"
]

sputnik=[
    "PAULA SAYED RODRIGUEZ OSPINA\n",
    "ANGEL DANIEL MOSQUERA GUIARIN\n",
    "MARIO MARQUECIN RULO\n",
    "MATEO ANDRES ZULUAGA MARIN\n",
    "HANAA SAHAB RODRIGEZ MONTERO\n",
    "JUAN DIEGO MELENDEZ RODRIGEZ\n"
]

def listaimpresa(how):
    print(how)

def mascampers(how):
    print("ingrese el nombre del camper en mayuscula")
    camper=str(input("quien es el camper??:"))
    how.append(f"{camper}\n")    
    
def menoscampers(how):
    print("ingrese el nombre del camper en mayuscula")
    camper=str(input("quien es el camper??:"))
    how.append(camper)   
    
def ordencampers(how):
    how.sort()
    print(how)
    
def buscarcamper(how):
    print("¡porfavor no colocar valores alfanumericos!")
    nombre=str(input("a quien buscas??:\t"))
    
    for i in how:
        if nombre == i:
            how.pop(i)

                