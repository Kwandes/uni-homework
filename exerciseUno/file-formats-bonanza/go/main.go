package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
)

type planetsData []map[string]interface{}

func main() {
	fmt.Println("Go World")

	var data planetsData
	// Json Data
	jsonFile, err := ioutil.ReadFile("../files/planets.json")
	if err != nil {
		log.Fatal(err)
	}
	err = json.Unmarshal(jsonFile, &data)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(data)
}
