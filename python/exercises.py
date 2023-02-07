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