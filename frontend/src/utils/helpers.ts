export const formatAMPM = (date: Date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? 0 + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

export const trimName = (name: string, tructedLength: number): string => {
  if (name?.length > tructedLength) {
    return `${name.substring(0, tructedLength)}...`;
  } else {
    return name;
  }
};
