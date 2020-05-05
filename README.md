# cut-caesar
A humble try at deciphering encryption with Caesar's cipher using frequency analysis. This is a work in progress and new items maybe added to the roadmap as and when some interesting idea is conceptualized.

As most of us know, Caeser's cipher is the like the most basic form of encryption ever known. According to this methodology, a message can be encrypted by shifting the letters of the message by a unique arbitrary number. If the shift exhausts the alphabets in the dictionary, it is to be cycled around for the first letter in the dictionary.

## Example

This can be quite intimidating for some, let just help you with an example:

Consider the dictionary of english, where the aplhabets range from a-z. To encrypt a word in the english dictionary say "zebra", an abitrary number or commonly known as the key is to be chosen. Suppose we have have the key to be 7. The encryption of the word would go something like:

Key k: 7<br>
Message m: zebra<br>
Cipher c:  GLIYH<br>

## Explanation

Now shifting all letters by 7 should be straightword like "L" is 7 letters away from "e" and "I" is the same for "b". As for "z", since the english alphabets are exhausted with "z", we wrap around and start from "A" to go to "G" if that makes sense.

## Implementation

Enough talk, here is what we are going to do, given the Cipher text, without the key, we are going to find the message. The project however has some restrictions:

* We are going to concentrate only on English alphabet dictionary.
* We are going to going to use one word ciphers only.
* We are only going to use ciphers of Caesar cipher encryption, no other ciphers supported.

## Pre-requesties

* Node.js v6+

<!--- ## Usage

Run `crack.js` using `node crack.js`, feed your cipher text and boom! You will get your message -->

## Roadmap

- [ ] Caesar cipher prediction using brute force
- [ ] Automate usage
- [ ] Frequency analysis of mostly used letters in words before looking for possible words
- [ ] ...
