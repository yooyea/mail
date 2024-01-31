import AbcList from "@/components/abc/AbcList";
import NewAbcModal from "@/components/abc/AbcModal";
import { api } from "@/lib/trpc/api";

export default async function Abc() {
  const { abc } = await api.abc.getAbcs.query();  

  return (
    <main>
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl my-2">Abc</h1>
        <NewAbcModal />
      </div>
      <AbcList abc={abc} />
    </main>
  );
}
