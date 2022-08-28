package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"

	"gopkg.in/yaml.v3"
	// "strings"
	// "github.com/sbabiv/xml2map"
)

type planetsData []map[string]interface{}

func main() {
	fmt.Println("===== JSON =====")

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

	// YAML Data
	fmt.Println("===== YAML =====")
	dataYaml, err := ioutil.ReadFile("../files/planets.yml")
	if err != nil {
		log.Fatal(err)
	}
	var body interface{}
	if err := yaml.Unmarshal([]byte(dataYaml), &body); err != nil {
		log.Fatal(err)
	}

	body = convertYamlToJson(body)

	if b, err := json.Marshal(body); err != nil {
		log.Fatal(err)
	} else {
		fmt.Printf("Output: %s\n", b)
	}

	// XML - doesn't work so it is commented out
	// decoder := xml2map.NewDecoder(strings.NewReader("../files/planets.xml"))
	// result, err := decoder.Decode()

	// if err != nil {
	// 	fmt.Printf("%v\n", err)
	// } else {
	// 	fmt.Printf("%v\n", result)
	// }

	// v := result["root"].(map[string]interface{})["row"].([]map[string]interface{})[0]["satelites"].(map[string]interface{})["n"].([]string)[1]

	// fmt.Printf("n[1]: %v\n", v)
}

func convertYamlToJson(i interface{}) interface{} {
	switch x := i.(type) {
	case map[interface{}]interface{}:
		m2 := map[string]interface{}{}
		for k, v := range x {
			m2[k.(string)] = convertYamlToJson(v)
		}
		return m2
	case []interface{}:
		for i, v := range x {
			x[i] = convertYamlToJson(v)
		}
	}
	return i
}
