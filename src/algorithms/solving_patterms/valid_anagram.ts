// Given two strings, write a function to determine if the second string is
// an anagram of the first. An anagram is a word, phrase, or name formed by
// rearranging the letters of another, such as cinema, formed from iceman.

//You may assume the string contains only lowercase alphabets.

export function validAnagram(str1: string, str2: string) {
  if (str1.length !== str2.length) {
    return false;
  }
  
  const acc: Record<string, number> = {};
  
  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];
    acc[letter] ? acc[letter] += 1 : acc[letter] = 1;
  }
  
  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];
    if (acc[letter] === undefined || acc[letter] <= 0) {
      return false;
    }
    
    acc[letter] -= 1;
  }
  return true;
}