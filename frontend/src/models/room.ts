export interface RoomI {
  id: string;
  title: string;
  level: string;
  language: string;
  topic: string;
  is_public: boolean;
  max_participants: number;
  current_participants: number;
  meet_id: string;
  status: string;
}
