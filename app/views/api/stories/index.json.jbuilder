json.array! @stories do |story|
  json.id story.id
  json.title story.title
  json.every_word story.every_word
  json.body story.body
  json.recent_identifier story.recent_identifier
end
