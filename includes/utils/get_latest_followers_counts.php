<?php

include '../config.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function fetchFacebookData() {
    $url = "https://api.apify.com/v2/datasets/KYnmYS9FNxzFnOS3v/items?token=apify_api_kHxoLYM4jB4oX8x9vRLc5vrNodVDWa46dQgj";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Disable SSL verification (use only if necessary)

    $response = curl_exec($ch);
    if ($response === false) {
        throw new Exception("cURL Error: " . curl_error($ch));
    }

    curl_close($ch);
    $data = json_decode($response, true);
    return $data[0] ?? null; // Return fetched data or null if empty
}


// Define the function to fetch Instagram data
function fetchInstagramData() {
    $url = "https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=liwanagatdunong";
    $headers = [
        "x-rapidapi-key: a77516da66msh527c0a3be893d86p154fbbjsn2b4681c7a26a",
        "x-rapidapi-host: instagram-scraper-api2.p.rapidapi.com"
    ];
    
    $options = [
        "http" => [
            "header" => implode("\r\n", $headers)
        ]
    ];
    
    $context = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    
    if ($response === FALSE) {
        throw new Exception("Failed fetching the Instagram API followers count");
    }

    $data = json_decode($response, true);
    return $data['data']; // Returning the fetched data
}

// Define the function to fetch TikTok data
function fetchTiktokData() {
    $url = "https://tiktok-api23.p.rapidapi.com/api/user/info?uniqueId=liwanagatdunong";
    $headers = [
        "x-rapidapi-key: a77516da66msh527c0a3be893d86p154fbbjsn2b4681c7a26a",
        "x-rapidapi-host: tiktok-api23.p.rapidapi.com"
    ];
    
    $options = [
        "http" => [
            "header" => implode("\r\n", $headers)
        ]
    ];
    
    $context = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    
    if ($response === FALSE) {
        throw new Exception("Failed fetching the TikTok API followers count");
    }

    $data = json_decode($response, true);
    return $data['userInfo']; // Returning the fetched data
}

// Define the function to fetch Twitter data
function fetchTwitterData() {
    $url = "https://twitter-api45.p.rapidapi.com/screenname.php?screenname=liwanagatdunong";
    $headers = [
        "x-rapidapi-key: a77516da66msh527c0a3be893d86p154fbbjsn2b4681c7a26a",
        "x-rapidapi-host: twitter-api45.p.rapidapi.com"
    ];
    
    $options = [
        "http" => [
            "header" => implode("\r\n", $headers)
        ]
    ];
    
    $context = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    
    if ($response === FALSE) {
        throw new Exception("Failed fetching the Twitter API followers count");
    }

    $data = json_decode($response, true);
    return $data; // Returning the fetched data
}

// Define the function to fetch YouTube data
function fetchYoutubeData() {
    $url = "https://yt-api.p.rapidapi.com/channel/home?forUsername=%40LiwanagatDunong";
    $headers = [
        "x-rapidapi-key: a77516da66msh527c0a3be893d86p154fbbjsn2b4681c7a26a",
        "x-rapidapi-host: yt-api.p.rapidapi.com"
    ];
    
    $options = [
        "http" => [
            "header" => implode("\r\n", $headers)
        ]
    ];
    
    $context = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    
    if ($response === FALSE) {
        throw new Exception("Failed fetching the YouTube API followers count");
    }

    $data = json_decode($response, true);
    return $data['meta']; // Returning the fetched data
}

// Update followers function
function updateFollowers() {
    try {
        // Fetch data from all APIs
        $facebookData = fetchFacebookData();
        $instagramData = fetchInstagramData();
        $twitterData = fetchTwitterData();
        $tiktokData = fetchTiktokData();
        $youtubeData = fetchYoutubeData();

        // Prepare updates array
        $updates = [
            ['id' => 1, 'followers_count' => $facebookData['followers'] ?? null],
            ['id' => 2, 'followers_count' => $instagramData['follower_count'] ?? null],
            ['id' => 3, 'followers_count' => $twitterData['sub_count'] ?? null],
            ['id' => 4, 'followers_count' => $tiktokData['stats']['followerCount'] ?? null],
            ['id' => 5, 'followers_count' => $youtubeData['subscriberCount'] ?? null],
        ];

        // Validate followers data
        foreach ($updates as $update) {
            if (!$update['followers_count']) {
                throw new Exception("Invalid followers count for id {$update['id']}");
            }
        }

        // Prepare data for PUT request

        //$url = "http://liwanagatdunong.ct.ws/includes/admin/update_all_followers_count.php";
        $url = "http://localhost/liwanagatdunong/includes/admin/update_all_followers_count.php";
        $options = [
            "http" => [
                "header" => "Content-Type: application/json\r\n",
                "method" => "PUT",
                "content" => json_encode(['updates' => $updates])
            ]
        ];

        $context = stream_context_create($options);
        $response = file_get_contents($url, false, $context);

        // Check if PUT request was successful
        if ($response === FALSE) {
            throw new Exception("Error updating the followers count");
        }

        $data = json_decode($response, true);
        echo $data;

        // Return success message
        if (isset($data['message'])) {
            echo json_encode(["message" => "Followers count updated successfully."]);
            exit(0); // Indicate success
        } else {
            echo json_encode(["message" => "Followers count updated successfully."]);
            exit(1); // Indicate failure
        }
    } catch (Exception $e) {
        // Catch any exceptions and return an error message
        echo json_encode(["message" => "Followers count updated successfully.", "error" => $e->getMessage()]);
        exit(1); // Indicate failure
    }
}

// Call the function to update followers
updateFollowers();
?>
