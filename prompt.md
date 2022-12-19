Exercise: “Whereis” our field staff?
At Dimagi, we typically have a lot of employees spread throughout the globe. One of our engineers built a website to keep tabs on everyone's location, which looked a little like this:

[image removed]

However, one challenge we faced is that our staff are often deployed to regions with little to no internet connectivity, which makes updating their locations from a rich web interface a challenge. One thought we had was to integrate a simple, light-weight web form into the service. This would allow the field staff in remote areas to navigate to a web form, input their user and location details, and have this information automatically update their location. You have been tasked with starting the process of building this functionality.

Your goal is to take in information from a web form and convert it to a normalized record that can be used to update the whereis.dimagi.com database.

Your source data for lookups will be geonames. http://www.geonames.org/

You can use whatever data format you'd like to get the data, although we recommend either using the search api ( http://www.geonames.org/export/geonames-search.html ) or the text-download format http://download.geonames.org/export/dump/ . For text-download, the cities15000.zip file has a good set of locations to start with. For api calls you can use username/password (dimagi/dimagi). Note that there is an hourly API limit of 2000 calls per hour, so be slightly judicious with API requests.

Likewise, you can assume any format you want for the incoming web form data. For example, one source data format might be an array formatted like:

[["nick@dimagi.com", 2011-05-19 14:05,  "Dodoma"],
 ["alex@dimagi.com", 2011-05-22 16:22,  "Lusaka"]]

The output of your program should be a normalized output of the person, time, and location (latitude and longitude) of the guessed location. The most likely format for this output would be a database table or set of tables, but other formats such as json, xml, or csv are perfectly fine.
