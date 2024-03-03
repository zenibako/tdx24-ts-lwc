public class GoogleTranslationController {
  public class GoogleTranslationKeys {
    public string projectId;
    public string apiKey;

    public GoogleTranslationKeys(string projectId, string apiKey) {
      this.projectId = projectId;
      this.apiKey = apiKey;
    }
  }

  @AuraEnabled(cacheable=true)
  public static String getKeys() {
    return JSON.serialize(
      new GoogleTranslationKeys('your-project-id', 'your-api-key')
    );
  }
}
