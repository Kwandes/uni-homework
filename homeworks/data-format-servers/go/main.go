package main

import (
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"

	"net/http"
)

var serverPort int = 3000
var otherServerPort int = 3001

func main() {
	fmt.Println("===== Goland Server running =====")

	router := gin.Default()
	router.GET("/healthcheck", getServerStatus)

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
