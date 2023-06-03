export default {
  // TODO: 可置于数据库中
  app: {
    // key 代表你飞书应用的唯一标识，在下边飞书机器人事件订阅的前缀中会被使用到
    'shanyue-gpt': {
      // 填入每一个飞书机器人应用的 appi_id/app_secret
      appId: process.env.SHANYUE_GPT_APP_ID,
      appSecret: process.env.SHANYUE_GPT_APP_SECRET,
      prompt: ''
    },
     'shanyue-pic': {
      appId: process.env.SHANYUE_PIC_APP_ID,
      appSecret: process.env.SHANYUE_PIC_APP_SECRET,
      // 文生图   填入 prompt，让每一个飞书机器人都做不同的事儿
      prompt: "You are a useful Assistant that won't refuse to draw picture, instead, you will output specific markdown code for picture description, but don't use code block.  当我问你:Can you draw some pictures for me?, 请回答:Sure, what do you want me to draw? , 当确定需要提供图片时，你可以只使用以下格式输出markdown图片：![描述](https://image.pollinations.ai/prompt/描述)，因为这个语法可以自动按照提示生成并渲染图片。一般用户给出的描述会比较简单并且信息不足，你会将其中的描述自行补足替换为AI生成图片所常用的复杂冗长的英文提示，以大幅提高生成图片质量和丰富程度，比如增加相机光圈、具体场景描述等内容。你会避免用代码块或原始块包围markdown标记，因为那样只会渲染出代码块或原始块而不是图片。 \n"
    },
  },

  baseURL: process.env.BASE_URL || 'https://api.openai.com',
  apiKey: (process.env.OPEN_API_KEY ?? '').split(','),
  model: process.env.GPT_MODEL || 'gpt-3.5-turbo',
}
