<template>
    <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col cols="12" sm="4" >
            <v-card  class="pa-2" outlined tile >
             <v-text-field :rules="rules" v-model="ip" placeholder="192.168.1.3"></v-text-field>
                <v-btn color="purple" dark elevation="2" v-on:click="popular()" > <v-icon class="ma-2" dark>fas fa-search</v-icon>Buscar</v-btn>
            </v-card>
          </v-col>

          <v-col cols="12" sm="8" >
            <v-card class="pa-2" outlined  tile >
                <table >
      <tbody>
        <tr>
          <td> <strong>IP</strong></td>
          <td>{{query}}</td>
        </tr>
        <tr>
          <td> <strong>Status</strong> </td>
          <td>{{status}}</td>
        </tr>
        <tr>
          <td> <strong>País</strong> </td>
          <td>{{country}}</td>
        </tr>
        <tr>
          <td> <strong>Código do País</strong> </td>
          <td>{{countryCode}}</td>
        </tr>
        <tr>
          <td> <strong>Região</strong> </td>
          <td>{{region}}</td>
        </tr>
        <tr>
          <td> <strong>Nome da região</strong> </td>
          <td>{{regionName}}</td>
        </tr>
        <tr>
          <td> <strong>Cidade</strong> </td>
          <td>{{city}}</td>
        </tr>
        <tr>
          <td> <strong>País</strong> </td>
          <td>{{zip}}</td>
        </tr>
        <tr>
          <td> <strong>Latitude</strong> </td>
          <td>{{lat}}</td>
        </tr>
         <tr>
          <td> <strong>Logitude</strong> </td>
          <td>{{lon}}</td>
        </tr>
         <tr>
          <td> <strong>timezone</strong> </td>
          <td>{{timezone}}</td>
        </tr>
         <tr>
          <td> <strong>isp</strong> </td>
          <td>{{isp}}</td>
        </tr>
        <tr>
          <td> <strong>org</strong> </td>
          <td>{{org}}</td>
        </tr>
        <tr>
          <td> <strong>As</strong> </td>
          <td>{{as}}</td>
        </tr>
        
      </tbody>

    </table>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>
<script>
import api from "@/service/api.js"

export default {
    name:"Grid",
    data(){
      return {
          ip: '',
              query: "",
              status: "",
              country: "",
              countryCode: "",
              region: "",
              regionName: "",
              city: "",
              zip: "",
              lat: 0,
              lon: 0,
              timezone: "",
              isp: "",
              org: "",
              as: ""
      }
    },
    methods:{
    popular(){
        api.get(''+this.ip).then(Response =>  {
            this.query = Response.data.query;      
              this.status = Response.data.status,
              this.country= Response.data.country,
              this.countryCode= Response.data.countryCode,
              this.region= Response.data.region,
              this.regionName= Response.data.regionName,
              this.city= Response.data.city,
              this.zip= Response.data.zip,
              this.lat= Response.data.lat,
              this.lon= Response.data.lon,
              this.timezone= Response.data.timezone,
              this.isp= Response.data.isp,
              this.org= Response.data.org,
              this.as= Response.data.as

              console.log(Response)
        })
    }
    }
    
}
</script>