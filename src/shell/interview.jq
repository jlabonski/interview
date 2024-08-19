[ 
    .databases[] | 
    { 
        name, 
        storage_type, 
        storage_used, 
        percent: ( 
            if .storage_type == "aurora"
                then null
            else 
                ( .storage_used / .storage_size )
            end )
    }
 ] | sort_by(.percent) | reverse 
