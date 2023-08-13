function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
  let album: Record<string, any> = {
    "artist": artist,
    "title": title
  };

  if (tracks) {
    album["tracks"] = tracks;
  }

  return album;
}

console.log(make_album("Abrar Ul haq", "Nachan main"));
console.log(make_album("Atif", "Doori", 1));
console.log(make_album("Ali Zafar", "Channo", 2));