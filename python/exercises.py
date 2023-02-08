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