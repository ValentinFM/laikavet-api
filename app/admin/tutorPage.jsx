// app/(admin)/tutores/page.jsx
import dbConnect from '@/lib/dbConnect';
import Tutor from '@/models/Tutor';
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
// (Aquí también importarías los botones de Editar/Eliminar)

async function getTutores() {
  await dbConnect(); // Conecta a la BD
  const tutores = await Tutor.find({}); // Así se leen todos
  return tutores;
}

export default async function PaginaTutores() {
  const tutores = await getTutores();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Gestión de Tutores (MongoDB)</h1>
      
      <Table>
        <TableHeader>
          {/* ... (igual que antes) ... */}
        </TableHeader>
        <TableBody>
          {tutores.map((tutor) => (
            <TableRow key={tutor._id}> {/* OJO: El ID ahora se llama _id */}
              <TableCell>{tutor.nombre}</TableCell>
              <TableCell>{tutor.apellido}</TableCell>
              <TableCell>{tutor.email}</TableCell>
              <TableCell>{tutor.telefono}</TableCell>
              <TableCell>{tutor.direccion}</TableCell>
              <TableCell>
                {/* Aquí iría el botón de eliminar.
                  ¡IMPORTANTE! Debes pasar el ID como string.
                  <BotonEliminar id={tutor._id.toString()} />
                */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}