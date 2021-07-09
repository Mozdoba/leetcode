/**
 *
 * @param {205. Isomorphic Strings
Easy


Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true


Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
Accepted
376,963
Submissions
920,918} s
 *
 */
/**
  *
  * @param {*} s
  * @param {*} t
  * @returns
  */
var isIsomorphic = function(s, t) {
  const mapStoT = new Map();
  const mapTtoS = new Map();
  for (let i = 0; i < t.length; i++) {
    if (!mapStoT.has(s.charAt(i)) && !mapTtoS.has(t.charAt(i))) {
      mapStoT.set(s.charAt(i), t.charAt(i));
      mapTtoS.set(t.charAt(i), s.charAt(i));
    } else {
      if (mapStoT.get(s.charAt(i)) != t.charAt(i) &&
          mapTtoS.get(t.charAt(i)) != s.charAt(i)) return false;
    }
  }
  return true;
}



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  s = s.toLowerCase();
  t = t.toLowerCase();
  let newString = t;
  const arr = new Array(128); //ASCII
  arr.fill(true);

  for (let i = 0; i < s.length; i++) {
    let asciiCode = s.charCodeAt(i);
    if (arr[asciiCode]) {
      newString = newString.replaceAll(newString.charAt(i), s.charAt(i));
      arr[asciiCode] = false;
    }
  }

  return s === newString;
};

isIsomorphic("paper", "title");