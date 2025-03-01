/*
* File: File Name
* Project: Project Name
* Author: Bizcloud Experts
* Date: Create Date
* Confidential and Proprietary
*/
'use strict'

module.exports.handler = async function (event, context) {
  console.info('🙂 -> file: index.js:4 -> context:', context);
  console.info('🙂 -> file: index.js:4 -> event:', event);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World'
    })
  }
}