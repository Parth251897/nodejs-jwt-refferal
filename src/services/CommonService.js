const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const referral = require("referral-codes");


async function passwordencrypt(password) {
  let salt = await bcrypt.genSalt(10);
  let passwordHash = bcrypt.hash(password, salt);
  return passwordHash;
}

function validatePassword(password) {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$&%])(?!.*\s).{6,10}$/;
  return pattern.test(password);
}

function generateRandomAlphaNumeric(length) {
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}




module.exports = { passwordencrypt, validatePassword,generateRandomAlphaNumeric };
