const insertVoteRepositories = require("./insertVoteRepositories");
const selectVoteByUserId = require("./selectVoteByUserId");
const selectEntriesWithVotes = require("./selectEntriesWithVotes");
const removeVote = require("./removeVote")

module.exports = {insertVoteRepositories, selectVoteByUserId , selectEntriesWithVotes , removeVote}