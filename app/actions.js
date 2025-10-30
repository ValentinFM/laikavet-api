// app/actions.js
"use server";

import dbConnect from "@/lib/dbConnect"; // 1. El helper de conexión
import Tutor from "@/models/Tutor"; // 2. El modelo
import { revalidatePath } from "next/cache";

// --- CRUD DE TUTORES (con Mongoose) ---

export async function crearTutor(formData) {
  await dbConnect(); // Conecta a la BD

  const nombre = formData.get("nombre");
  const apellido = formData.get("apellido");
  const email = formData.get("email");
  const telefono = formData.get("telefono");
  const direccion = formData.get("direccion");

  try {
    await Tutor.create({ nombre, apellido, email, telefono, direccion }); // Así se crea
    revalidatePath("/(admin)/tutores");
    return { success: true };
  } catch (error) {
    return { error: error.message };
  }
}

export async function eliminarTutor(id) {
  await dbConnect(); // Conecta a la BD

  try {
    await Tutor.findByIdAndDelete(id); // Así se elimina
    revalidatePath("/(admin)/tutores");
    return { success: true };
  } catch (error) {
    return { error: error.message };
  }
}
