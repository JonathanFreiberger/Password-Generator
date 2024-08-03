document.getElementById('generateBtn').addEventListener('click', generatePassword);

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const type = document.getElementById('type').value;
    
    let characters = '';
    if (type === 'letters' || type === 'both') {
        characters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (type === 'numbers' || type === 'both') {
        characters += '0123456789';
    }
    
    let password = '';
    let hasNumber = false;
    
    while (password.length < length) {
        let word = generateWord();
        if (type === 'both' && !hasNumber) {
            word += Math.floor(Math.random() * 10);
            hasNumber = true;
        }
        if (password.length + word.length <= length) {
            password += word;
        } else {
            password += word.slice(0, length - password.length);
        }
    }
    
    document.getElementById('password').innerText = password;
}

function generateWord() {
    const words = [
        "ability", "absence", "academy", "account", "accuse", "achieve", "acquire", "address", "advance", "advice",
        "affect", "afford", "against", "airport", "alcohol", "alleged", "already", "amazing", "analyze", "ancient",
        "animal", "another", "anxiety", "anybody", "apology", "apparent", "appeal", "appoint", "approve", "arrange",
        "arrival", "article", "assault", "attempt", "attract", "auction", "average", "backing", "balance", "battery",
        "bearing", "benefit", "between", "billion", "blanket", "booking", "brother", "builder", "cabinet", "campaign",
        "capable", "capital", "capture", "careful", "carrier", "caution", "central", "ceremony", "chairman", "channel",
        "chapter", "charity", "chicken", "classic", "climate", "clothes", "collect", "college", "combine", "comfort",
        "command", "comment", "company", "compare", "complex", "concept", "concern", "concert", "conduct", "confirm",
        "connect", "consist", "contact", "contain", "contest", "context", "control", "convert", "council", "country",
        "crucial", "crystal", "culture", "current", "cutting", "declare", "decline", "defence", "deficit", "deliver",
        "density", "deposit", "desktop", "despite", "destroy", "develop", "diamond", "digital", "discuss", "disease",
        "dismiss", "display", "dispute", "distant", "diverse", "divorce", "drawing", "dynamic", "economy", "edition",
        "educate", "elderly", "elegant", "element", "engaged", "enhance", "essence", "evening", "evidence", "exactly",
        "examine", "example", "excited", "expense", "explain", "explore", "extreme", "faculty", "failing", "failure",
        "fashion", "feature", "federal", "feeling", "fiction", "fifteen", "filling", "finance", "finding", "fitness",
        "foreign", "forever", "formula", "fortune", "forward", "founder", "freedom", "further", "gallery", "general",
        "genetic", "genuine", "gesture", "greater", "hanging", "heading", "healthy", "hearing", "heavily", "helpful",
        "helping", "herself", "highway", "himself", "history", "holding", "holiday", "honesty", "however", "hundred",
        "husband", "illegal", "illness", "imagine", "impress", "improve", "include", "initial", "inquiry", "insight",
        "inspire", "instead", "intense", "involve", "jointly", "journey", "justice", "justify", "keeping", "killing",
        "kingdom", "kitchen", "knowing", "landing", "largely", "lasting", "leading", "learned", "leisure", "liberal",
        "library", "license", "limited", "listing", "logical", "longest", "loyalty", "machine", "manager", "manner",
        "massive", "maximum", "meaning", "measure", "medical", "meeting", "mention", "message", "million", "mineral",
        "minimal", "minimum", "missing", "mission", "mistake", "mixture", "monitor", "monthly", "morning", "musical",
        "mystery", "natural", "neither", "nervous", "network", "nothing", "notable", "noted", "notion", "novel",
        "nowhere", "nuclear", "nursing", "obvious", "offense", "officer", "ongoing", "opening", "operate", "opinion",
        "organic", "outcome", "outdoor", "outlook", "overall", "pacific", "package", "parking", "partial", "partner",
        "passage", "passing", "passion", "patient", "pattern", "payment", "penalty", "pending", "pension", "percent",
        "perfect", "perform", "perhaps", "physics", "picture", "pioneer", "planned", "plastic", "platform", "player",
        "portion", "poverty", "precise", "predict", "premise", "premium", "prepare", "present", "prevent", "primary",
        "printed", "privacy", "private", "problem", "proceed", "process", "produce", "product", "profile", "program",
        "project", "promise", "promote", "propose", "prospect", "protect", "protein", "protest", "provide", "publish",
        "purpose", "pursuit", "pushing", "quality", "quarter", "radical", "railway", "readily", "reading", "reality",
        "realize", "rebuild", "receipt", "receive", "recover", "reflect", "reform", "regard", "regular", "related",
        "release", "remains", "removal", "replace", "request", "require", "reserve", "resolve", "respect", "respond",
        "restore", "retired", "revenue", "reverse", "rivalry", "routine", "running", "satisfy", "science", "scratch",
        "section", "segment", "serious", "service", "session", "setting", "shortly", "similar", "simple", "situate",
        "society", "soldier", "somehow", "speaker", "special", "species", "sponsor", "station", "stretch", "student",
        "studied", "subject", "success", "suggest", "summary", "support", "suppose", "supreme", "surface", "surgery",
        "surplus", "survive", "suspect", "sustain", "teacher", "telecom", "telling", "tension", "testing", "theater",
        "therapy", "thereby", "thought", "through", "tonight", "totally", "tourist", "towards", "trouble", "turning",
        "typical", "uniform", "unknown", "unusual", "utility", "variety", "various", "vehicle", "venture", "version",
        "veteran", "victory", "village", "violence", "visible", "waiting", "walking", "wanting", "warning", "warrant",
        "wedding", "weekend", "welcome", "welfare", "western", "whereas", "whereby", "wherever", "whether", "willing",
        "winning", "without", "witness", "working", "writing", "written", "younger", "yourself"
    ];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}
