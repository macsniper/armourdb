# armour database viewer

## Installation

* Download archive armourdb.zip from [here](https://github.com/macsniper/armourdb/raw/master/armourdb.zip)
* Download the ph.d thesis from Mattias Goll from [here](http://www.ub.uni-heidelberg.de/archiv/17203)
* unzip both archives to the same folder
* open index.html in your favorite browser (double-click it)

## Usage

The form should be self-explanatory. The freetext filter field is used to enter arbitrary contents of any of the metadata fields.

The input 'json filter' can be used to enter arbitrary JSON fragments which the selected items must fulfil. For example, you can write **{"estimated dating by stylistic criteria": {"8th": "decade of 15th c."}}** to search for all items dated to 1470-1480. Or you can write **{"marks": {"identification - city mark": "Nuremberg"}}** for all items which have an identification mark of the city of Nuremberg. Internally this just uses [lodash.filter](https://lodash.com/docs/4.17.4#filter) and uses JSON.parse on the input string.

