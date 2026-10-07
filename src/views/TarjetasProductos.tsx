import { View, Text, StyleSheet } from "react-native";
import { Producto } from "../models/productos";

export default function TarjetasProductos({ datos }: { datos: Producto[] }) {
  return (
    <View style={styles.contenedor}>
      {datos.map((p) => (
        <View key={p.id} style={styles.tarjeta}>
          <Text style={styles.nombre}>{p.nombre}</Text>
          <Text style={styles.categoria}>{p.categoria}</Text>
          <Text style={styles.precio}>${p.precio}</Text>
          <Text style={styles.stock}>Stock: {p.stock}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  tarjeta: {
    width: "47%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    elevation: 2,
  },
  nombre: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  categoria: { fontSize: 12, color: "#6b7280", marginBottom: 8 },
  precio: { fontSize: 18, color: "#2563eb", fontWeight: "bold" },
  stock: { fontSize: 12, color: "#374151", marginTop: 4 },
});