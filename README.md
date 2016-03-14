# Emotional Metadata

An attempt to make email less damaging by sending the author's context with the text. A chrome extention that builds on gmail. 

*not currently maintained* Feel free to fork and take over. 

### Planned functionality

The email author is periodically asked to self assess (hourly?) on questions regarding mental, physical and emotional status. These are shared with whitelisted contacts as an email footer. Other passive metadata may be usefully integrated -- travel schedule ("I'm flying to Aukland tommorrow"; "I traveled 14,392 km in the last seven days"), imprecise location ("Sent from the Chicago area"; "Sent from my office"), music ("Listening to Beyonce"), scheduling ("I'm on vacation today."; "I prefer US/Central time (GMT -6)").

### Privacy goals

- defaults to no sharing, must opt in for all behavior
- no data stored in the cloud
- behavior is transparent to sender, can edit footer

### Dependencies

- Gmail. An unofficial api, which is expected to break periodically. 
- jQuery 
- gmail.js http://github.com/kartiktalwar/gmail.js A pretty good abstraction layer that behaves with gmail cross-site security practices. 

### Maintainer

- Github: jonathan-eyler-werve 
- Twitter: @eylerwerve 




