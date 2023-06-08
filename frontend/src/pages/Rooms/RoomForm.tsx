import { Input, RadioButton, Select } from "@/components";
import { LANGUAJES, TOPICS } from "@/constants";

const items = [
  { id: true, name: "true" },
  { id: false, name: "false" },
];

const RoomForm = () => {
  return (
    <div className="grid gap-x-4 md:grid-cols-2">
      <Input label="Title" name="title" />
      <Select label="Languaje" name="language" items={LANGUAJES} />
      <Input label="Level" name="level" />
      <Input label="Max participants" name="max_participants" max={5} />
      <Select label="Topic" name="topic" items={TOPICS} />
      <RadioButton label="Is public" name="is_public" items={items} />
    </div>
  );
};

export default RoomForm;
