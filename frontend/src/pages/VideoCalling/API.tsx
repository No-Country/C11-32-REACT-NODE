
export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJlYTk5MTMwNS1iZmQ1LTQwNzMtOTAyMS1hMWM4ZDllN2U0ZjAiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY4NDM0MDYxMCwiZXhwIjoxNjkyMTE2NjEwfQ.4gsDfHeQWZKCrQhpadZNQCQ1yKutPMODrcby0mGqbEM";

// API call to create meeting
export const createMeeting = async () => {
  const res = await fetch(`https://api.videosdk.live`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId }: {roomId: string} = await res.json();
  return roomId;
};