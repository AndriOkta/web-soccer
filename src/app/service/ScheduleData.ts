import { Schedule } from "..//interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[]= [
    {id:1,PlayingDate:new Date(2011,08,10),HomeTeam:'Persija',
    AwayTeam:'Persipon', HomeScore:3,AwayScore:2,
    RefName:'Joko',Notes:'Overtime'},
    {id:2,PlayingDate:new Date(2011,08,10),HomeTeam:'RRQ',
    AwayTeam:'PERSIPON', HomeScore:3,AwayScore:2,
    RefName:'Budi',Notes:'Overtime'},
    {id:3,PlayingDate:new Date(2011,08,10),HomeTeam:'RRQ',
    AwayTeam:'Bali United', HomeScore:3,AwayScore:2,
    RefName:'Bambang',Notes:'Overkill'},
    {id:4,PlayingDate:new Date(2011,08,10),HomeTeam:'EVOS',
    AwayTeam:'Black International', HomeScore:3,AwayScore:2,
    RefName:'Andri',Notes:'Overtime'},
    {id:5,PlayingDate:new Date(2011,08,10),HomeTeam:'Navi',
    AwayTeam:'Todak', HomeScore:3,AwayScore:2,
    RefName:'Jack',Notes:'navi agak lag'},
]
export const Teams:Team[]=[
    {id:1,name:'Persija',type:'Klub lokal'},
    {id:2,name:'Persipon',type:'Klub lokal'},
    {id:3,name:'Bali United',type:'Klub lokal'},
    {id:4,name:'Evos',type:'Klub lokal'},
    {id:5,name:'RRQ',type:'Klub lokal'},
    {id:6,name:'Todak',type:'Klub lokal'},
    {id:7,name:'Navi',type:'Klub lokal'},
]