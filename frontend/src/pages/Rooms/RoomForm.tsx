import { Input } from "@/components";

const RoomForm = () => {
  return (
    <div className="grid gap-x-4 md:grid-cols-2">
      <Input label="Title" name="title" />
      <Input label="Languaje" name="language" />
      <Input label="Level" name="level" />
      <Input label="Is public" name="is_public" />
      <Input label="Max participants" name="max_participants" max={5} />
      <Input label="Topic" name="topic" />
    </div>
  );
};

export default RoomForm;
