/**
 * 599. Minimum Index Sum of Two Lists
Easy

COMPLETED —— 2021-06-22 —— 1h 38m 20s
Tag - Hash Set

Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.



Example 1:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".
Example 2:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
Example 3:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
Output: ["KFC","Burger King","Tapioca Express","Shogun"]
Example 4:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
Output: ["KFC","Burger King","Tapioca Express","Shogun"]
Example 5:

Input: list1 = ["KFC"], list2 = ["KFC"]
Output: ["KFC"]


Constraints:

1 <= list1.length, list2.length <= 1000
1 <= list1[i].length, list2[i].length <= 30
list1[i] and list2[i] consist of spaces ' ' and English letters.
All the stings of list1 are unique.
All the stings of list2 are unique.
 */

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    let map = new Map();
    let resMap = new Map();

    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }

    for (let i = 0; i < list2.length; i++) {
        if (map.has(list2[i])) {
            resMap.set(list2[i], map.get(list2[i]) + i);
        }
    }

    let leastIndex = 10000;
    for (let val of resMap.values()) {
        leastIndex = Math.min(val, leastIndex);
    }

    let entries = Array.from(resMap.entries());

    let res = entries.map(([key,val]) => {
        if (val === leastIndex) return key;
    }).filter((k) => k);

    return res;
  };

findRestaurant(
    ["Shogun","Tapioca Express","Burger King","KFC"],
    ["KFC","Shogun","Burger King"]
    );