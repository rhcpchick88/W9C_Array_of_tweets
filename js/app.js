//started with making my array and my loop

let tweets = [
    {
        "tweet": `Sick of having to go to 2 different huts to buy pizza & sunglasses`,
        "username":`@Leemanish`,
        "created_at":new Date(`05-15-2008`),
        "age": 16
    },
    {
        "tweet":`Building inspector: What's this? Darth Vader: the death -- uh the health star`,
        "username": `@bobvulfov`,
        "created_at":new Date(`07-19-2010`),
        "age":20
    },
    {
        "tweet":`How dare you call me mentally unstable, on this, the day of my cat's quinceanera`,
        "username":`@phranqueigh`,
        "created_at":new Date(`02-01-2015`),
        "age":30
    },
    {
        "tweet":`When I find myself in times of trouble, brother Mario comes to me speaking words of wisdom.. "it's a me"`,
        "username":`@ellle_em`,
        "created_at":new Date(`12-01-2018`),
        "age":27
    },
    {
        "tweet":`[Joins a conga line] me: I can leave any time I like  [Someone joins behind] me: Oh no`,
        "username":`@HansGruberton`,
        "created_at":new Date(`03-09-2022`),
        "age":35
    },
    {
        "tweet":`"Anybody here named Jeff?"  Jeff: "Yes"   Geoff: "Yeos"`,
        "username":`@mtobey`,
        "created_at":new Date(`11-15-2016`),
        "age":25
    },
    {
        "tweet":`"How much for the horse tornado?"    Sir, that's a carousel.   "I must have it."`,
        "username":`@neonsinatra`,
        "created_at":new Date(`06-30-2007`),
        "age":16
    },
    {
        "tweet":`"Um." - 1st horse that got ridden`,
        "username":`@rorynotroy`,
        "created_at":new Date(`10-09-2021`),
        "age":41
    },
    {
        "tweet":`Our scariest president was probably Rushmore, because he had four heads`,
        "username":`@meganamram`,
        "created_at":new Date(`09-09-2011`),
        "age":38
    },
    {
        "tweet":`"Don't worry, I'll hold your stuff. You just worry about making friends." - Cargo shorts`,
        "username":`@DearAnyone`,
        "created_at":new Date(`06-26-2006`),
        "age":50
    }
]
// loop is starting at 0, when the counter hits 9 the printing loop ends.

for (i=0; i < 9; i++){
    console.log(tweets[i]);
    if (age => 18){
        console.log(true);
    }else {
        console.log(false);
    }
}


