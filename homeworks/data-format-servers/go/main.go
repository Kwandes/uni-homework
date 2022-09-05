package main

import (
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"

	"net/http"

	"encoding/json"
	"io/ioutil"
	"log"

	"gopkg.in/yaml.v3"
)

var serverPort int = 3000
var otherServerPort int = 3001

func main() {
	fmt.Println("===== Goland Server running =====")

	router := gin.Default()
	router.GET("/healthcheck", getServerStatus)
	router.GET("/files/json", getJson)
	router.GET("/files/yaml", getYaml)

	router.Run("localhost:" + strconv.Itoa(serverPort))
}

// getAlbums responds with the list of all albums as JSON.
func getServerStatus(c *gin.Context) {
	data := make(map[string]interface{})
	data["status"] = "running"
	data["serverPort"] = serverPort
	data["targetServerPort"] = otherServerPort
	c.IndentedJSON(http.StatusOK, data)
}

type planetsData []map[string]interface{}

func getJson(c *gin.Context) {
	fmt.Println("===== JSON =====")

	var data planetsData
	// Json Data
	jsonFile, err := ioutil.ReadFile("./files/planets.json")
	if err != nil {
		log.Fatal(err)
	}
	err = json.Unmarshal(jsonFile, &data)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(data)
	c.IndentedJSON(0, data)
}

func getYaml(c *gin.Context) {
	// YAML Data
	fmt.Println("===== YAML =====")
	dataYaml, err := ioutil.ReadFile("./files/planets.yml")
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
		c.IndentedJSON(0, body)
		fmt.Printf("Output: %s\n", b)
	}
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
