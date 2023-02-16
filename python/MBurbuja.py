# array=[34,6,100,40,6]
# array.sort()
# print (array)


# array=[34,6,100,40,6]
# array.append(6)
# del array[1]
# array.append(34)
# del array[0]
# array.append(40)
# del array[1]
# array.append(100)
# del array[0]
# print (array)

# def invertir_cadena(cadena):
#     return cadena[::-1]
# print(invertir_cadena("hola mundo"))

# nota1=float(input("nota 1:\t"))
# nota2=float(input("nota 2:\t"))
# nota3=float(input("nota 3:\t"))
# par=float(input("parcial:\t"))
# pro=float(input("proyecto:\t"))
# acum=float(input("acumulativa:\t"))

# notprom=(nota1+nota2+nota3)/3
# notas=int(((55*notprom)+(par*15)+(pro*15)+(acum*15))/100)
# print(notas)

# print("\n\n\n\n\n\n\n")
# Tll=float(input("cuanto en llaves:\t\t"))
# ll=float(input("cuantas??:\t\t"))
# Tbo=float(input("cuanto en la bomba:\t\t"))
# bo=float(input("cuantas?? 1:\t\t"))
# Tpe=float(input("cuanto en cajas de pernos:\t"))
# pe=float(input("cuantas??:\t\t"))
# sobra=float(input("cuanto te sobro:\t\t"))
# llaves=int(Tll*ll)
# bomba=int(Tbo*bo)
# pernos=int(Tpe*pe)
# total=int(llaves+bomba+pernos+sobra)
# print(f"precio total de llaves:\t\t${llaves}")
# print(f"precio total de bombas:\t\t${bomba}")
# print(f"precio total de pernos:\t\t${pernos}")
# print(f"pagaste con:\t\t${total}")

print("\n\n\n\n\n")

ven1=int(input("venta realizada:\t\t"))
ven2=int(input("venta realizada:\t"))
ven3=int(input("venta realizada:\t"))
pb=int(input("porcentaje de bonificacion:\t"))
sal=1000000

total=sal+(pb*ven1/100)+(pb*ven2/100)+(pb*ven3/100)
print(f"esto fue lo que ganaste:\t${total}")