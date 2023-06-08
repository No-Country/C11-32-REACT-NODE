export const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJmMmM0OGU4OC02OGVhLTQ2M2UtYTZkNC1hNTU3ZTdkMWE1YWIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY4NTYzNzQ4MywiZXhwIjoxNjg2MjQyMjgzfQ.IjHI1-uzGnmvM2rtPxUl13bd57oMeXJPaLPGF-M1VRs";

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
