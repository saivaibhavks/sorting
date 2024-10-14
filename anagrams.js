const anagrams = (str1, str2) => {
  const str = "saiva";
  console.log("aaa", str.slice(0, 2));
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};

console.log(anagrams("sai", "ias"));
