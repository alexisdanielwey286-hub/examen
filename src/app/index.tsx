import { ScrollView, Text, StyleSheet } from "react-native";
import { obtenerProductos, obtenerTarjetas } from "../controllers/productosController";
import TablaProductos from "../views/TablaProductos";
import TarjetasProductos from "../views/TarjetasProductos";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.pantalla}>
      <Text style={styles.titulo}>Inventario</Text>

      <Text style={styles.subtitulo}>Tabla de productos</Text>
      <TablaProductos datos={obtenerProductos()} />

      <Text style={styles.subtitulo}>Tarjetas</Text>
      <TarjetasProductos datos={obtenerTarjetas()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: { padding: 20, paddingTop: 50, gap: 16, backgroundColor: "#f9fafb" },
  titulo: { fontSize: 26, fontWeight: "bold" },
  subtitulo: { fontSize: 18, fontWeight: "600", marginTop: 8 },
});