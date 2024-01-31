"use client";
import { CompleteAbc } from "@/lib/db/schema/abc";
import { trpc } from "@/lib/trpc/client";
import AbcModal from "./AbcModal";


export default function AbcList({ abc }: { abc: CompleteAbc[] }) {
  const { data: a } = trpc.abc.getAbcs.useQuery(undefined, {
    initialData: { abc },
    refetchOnMount: false,
  });

  if (a.abc.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul>
      {a.abc.map((abc) => (
        <Abc abc={abc} key={abc.id} />
      ))}
    </ul>
  );
}

const Abc = ({ abc }: { abc: CompleteAbc }) => {
  return (
    <li className="flex justify-between my-2">
      <div className="w-full">
        <div>{abc.time.toString()}</div>
      </div>
      <AbcModal abc={abc} />
    </li>
  );
};

const EmptyState = () => {
  return (
    <div className="text-center">
      <h3 className="mt-2 text-sm font-semibold text-secondary-foreground">
        No abc
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Get started by creating a new abc.
      </p>
      <div className="mt-6">
        <AbcModal emptyState={true} />
      </div>
    </div>
  );
};

