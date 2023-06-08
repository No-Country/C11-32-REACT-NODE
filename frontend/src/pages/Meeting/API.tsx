export const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIyOWJmYjRiYy1hM2RhLTQ2MzgtYWEwYS01YWNjYTM1MThkMGQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY4NjI1NDc0MiwiZXhwIjoxNzE3NzkwNzQyfQ.MSJ8DQKLZRSQLIuqQAGSCLlhN_UySs2R0WM1IQ9T_R4";

export const createMeeting = async () => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId }: { roomId: string } = await res.json();
  return roomId;
};
